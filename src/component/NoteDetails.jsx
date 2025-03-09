import { useState, useEffect } from "react";
import Buttton from "./Buttton"; // Corrected typo
import { ImCross } from "react-icons/im";
import { createPortal } from "react-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { notes } from "../utils/notes";


const fetchNote = async (noteId) => {
  const response = await notes.get(`api/notes/${noteId}`);
  return response.data;
};


const updateNote = async (noteId, title, note) => {
  const response = await notes.put(`api/notes/${noteId}/`, { title, note });
  return response.data;
};

const NoteDetails = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const noteId = pathname.split('/').pop();


  const { isFetching, data, error } = useQuery({
    queryKey: ['note', noteId],
    queryFn: () => fetchNote(noteId),
    onSuccess: (data) => {
      if (data) {
        setTitle(data.title || "");
        setNote(data.note || "");
      }
    },
  });

  useEffect(() => {
    if (data) {
      setTitle(data.title || "");
      setNote(data.note || "");
    }
  }, [data]);

  const mutation = useMutation({
    mutationFn: (updatedData) => updateNote(noteId, updatedData.title, updatedData.note),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['note', noteId] });
      queryClient.invalidateQueries({ queryKey: ['notes']});
      setIsEditMode(false);
    },
    onError: (error) => {
      alert(error.message);
    },
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !note.trim()) {
      alert("Title and note cannot be empty");
      return;
    }

    mutation.mutate({ title, note });
  };

  if (isFetching) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  return createPortal(
    <div className="fixed inset-0 bg-[#000000e8] flex justify-center items-center z-50">
      <div className="relative bg-amber-100 p-6 rounded-lg w-full max-w-lg mx-4 sm:mx-8 lg:max-w-2xl">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-black hover:text-gray-700 focus:outline-none"
          onClick={() => (isEditMode ? setIsEditMode(false) : navigate('/'))}
        >
          <ImCross />
        </button>

        {isEditMode ? (
          <form onSubmit={handleFormSubmit}>
            <textarea
              className="w-full resize-none focus:outline-0 text-2xl my-4 overflow-hidden"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{ fontFamily: '"Permanent Marker", serif' }}
              placeholder="Title"
              required
            />
            <hr />
            <textarea
              cols="30"
              rows="8"
              className="w-full resize-none focus:outline-0 text-gray-700 text-lg my-4 p-2"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Note"
              required
            />
            <Buttton buttonType="Save" />
          </form>
        ) : (
          <>
            <h2 className="text-2xl">{title}</h2>
            <hr />
            <p className="text-gray-700 text-lg my-4">{note}</p>
            <div onClick={() => setIsEditMode(true)}>
              <Buttton buttonType="Edit" />
            </div>
          </>
        )}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default NoteDetails;