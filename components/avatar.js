import Date from "../components/date";

export default function Avatar({ name, picture, date, postId }) {
  return (
    <div className="h-16 flex">
      <img
        className="w-12 h-12 rounded-full mr-4"
        src={picture.url}
        alt={name}
      />
      <div className="w-52 flex flex-wrap text-gray-800 text-base">
        <div className=" font-semibold">
          {name} | <vf-conversations-count vf-container-id={postId} /> comments
        </div>
        <div className="mb-4">
          <Date dateString={date} />
        </div>
      </div>
    </div>
  );
}
