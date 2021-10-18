import Date from "../components/date";
import Image from "next/image";

export default function Avatar({ name, picture, date, postId }) {
  return (
    <div className="flex mb-8">
      <Image
        className="rounded-full"
        src={picture.url}
        alt={name}
        width={48}
        height={48}
        layout="fixed"
      />
      <div className="ml-4 w-52 flex flex-wrap text-gray-800 text-base">
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
