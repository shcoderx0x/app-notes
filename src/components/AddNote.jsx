const AddNote = ({ close }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-dark-primary bg-opacity-50">
      <div className="relative flex flex-col gap-3 border border-white-font bg-dark-primary p-3">
        <button
          onClick={close}
          className="absolute  -right-5  -top-5 rounded-full border  border-white-font bg-dark-primary px-3 "
        >
          close
        </button>
        <input
          type="text"
          className="bg-dark-primary px-2 py-1 text-xl outline-none"
          placeholder="judul"
        />
        <textarea
          cols="30"
          rows="10"
          className="bg-dark-primary px-2 outline-none"
          placeholder="tulis sesuatu di sini..."
        ></textarea>
        <button className="rounded-md bg-blue py-2 text-white-font">
          simpan
        </button>
      </div>
    </div>
  );
};

export default AddNote;
