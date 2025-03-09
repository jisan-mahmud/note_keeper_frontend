import React, { useState, useCallback, useRef, useContext, useEffect } from 'react';
import Button from '../component/Buttton';
import { ImCross } from "react-icons/im";
import { useNavigate } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { notes } from "../utils/notes";
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AuthContext } from '../context/AuthContext';

const NewNode = () => {
    const queryClient = useQueryClient();
    const { token } = useContext(AuthContext);
    const navigate = useNavigate();

    const [selectedTags, setSelectedTags] = useState(new Set());
    const [newTag, setNewTag] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const titleRef = useRef('');
    const noteRef = useRef('');

    useEffect(() => {
        if (!token) navigate('/login', { replace: true });
    }, [token, navigate]);

    const { data: tags = [], isLoading, error } = useQuery({
        queryKey: ['tags'],
        queryFn: async () => (await notes.get("api/tags/")).data,
        enabled: !!token
    });

    const mutation = useMutation({
        mutationKey: ['add-note'],
        mutationFn: async (formData) => (await notes.post('api/notes/', formData)).data,
        onSuccess: () => {
            queryClient.invalidateQueries(['notes']);
            queryClient.invalidateQueries(['tags']);
            navigate('/');
        },
    });

    const handleTagChange = useCallback((tag) => {
        setSelectedTags((prev) => new Set([...prev, tag]));
        setDropdownOpen(false);
    }, []);

    const handleRemoveTag = useCallback((tag) => {
        setSelectedTags((prev) => {
            const updated = new Set(prev);
            updated.delete(tag);
            return updated;
        });
    }, []);

    const handleAddNewTag = useCallback(() => {
        if (newTag && !selectedTags.has(newTag)) {
            setSelectedTags((prev) => new Set([...prev, newTag]));
            setNewTag('');
        }
    }, [newTag, selectedTags]);

    const handleForm = (e) => {
        e.preventDefault();
        const title = titleRef.current.value.trim();
        const note = noteRef.current.value.trim();

        if (!title || !note || selectedTags.size === 0) {
            console.log('Please fill in all fields.');
            return;
        }

        const formData = {
            title,
            note,
            tags: [...selectedTags].join(', ')
        };

        mutation.mutate(formData);
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading tags</div>;

    return createPortal(
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="relative bg-amber-100 p-6 rounded-lg w-full max-w-lg mx-4 sm:mx-8 lg:max-w-2xl">
                <button
                    onClick={() => navigate(-1)}
                    className="absolute top-4 right-4 text-black hover:text-gray-700 focus:outline-none"
                >
                    <ImCross />
                </button>

                <h2 className="text-center text-2xl">Add New Note</h2>

                <form onSubmit={handleForm} className="flex flex-col">
                    <input
                        ref={titleRef}
                        placeholder="Enter the note topic..."
                        className="w-full border rounded-lg border-[#FF9A8B] my-2 p-3 focus:outline-0"
                    />
                    <textarea
                        ref={noteRef}
                        placeholder="Write something..."
                        rows="10"
                        className="w-full border rounded-lg border-[#FF9A8B] my-2 p-3 focus:outline-0"
                    />

                    <label className="mt-4 text-sm">Select Tags</label>
                    <div className="relative w-full">
                        <div
                            onClick={() => setDropdownOpen((prev) => !prev)}
                            className="cursor-pointer w-full border rounded-lg border-[#FF9A8B] my-2 p-3 flex justify-between items-center"
                        >
                            <span className={`text-gray-400 ${selectedTags.size === 0 ? 'italic' : ''}`}>
                                {selectedTags.size === 0 ? 'Select tags...' : [...selectedTags].join(', ')}
                            </span>
                            <span className="text-[#FF9A8B]">▼</span>
                        </div>

                        {dropdownOpen && (
                            <div className="absolute left-0 right-0 mt-2 bg-white border rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                                {tags.length > 0 ? (
                                    tags.map((tag) => (
                                        <div
                                            key={tag.id}
                                            onClick={() => handleTagChange(tag.name)}
                                            className={`cursor-pointer p-2 hover:bg-gray-100 ${
                                                selectedTags.has(tag.name) ? 'bg-[#FF9A8B]' : ''
                                            }`}
                                        >
                                            <span className={`text-sm ${selectedTags.has(tag.name) ? 'text-white' : 'text-gray-600'}`}>
                                                {tag.name}
                                            </span>
                                        </div>
                                    ))
                                ) : (
                                    <div className="p-2 text-center text-gray-500">No tags available</div>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="flex flex-wrap gap-2 mt-2">
                        {[...selectedTags].map((tag) => (
                            <span key={tag} className="flex items-center px-3 py-1 bg-[#FF9A8B] text-white rounded-full text-sm">
                                {tag}
                                <button
                                    type="button"
                                    onClick={() => handleRemoveTag(tag)}
                                    className="ml-2 text-white"
                                >
                                    &times;
                                </button>
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center gap-2 mt-4 flex-wrap">
                        <input
                            type="text"
                            value={newTag}
                            onChange={(e) => setNewTag(e.target.value)}
                            className="w-full sm:w-[calc(100%-6rem)] border rounded-lg border-[#FF9A8B] my-2 p-3 focus:outline-0"
                            placeholder="Enter new tag"
                        />
                        <button
                            type="button"
                            onClick={handleAddNewTag}
                            className="bg-blue-500 text-white p-2 rounded-md w-full sm:w-auto mt-2 sm:mt-0"
                        >
                            Add Tag
                        </button>
                    </div>

                    <Button buttonType="Add Note" />
                </form>
            </div>
        </div>,
        document.getElementById("modal-root")
    );
};

export default NewNode;
