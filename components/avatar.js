export default function Avatar({ name, picture, postId }) {
  return (
    <div className="flex items-center">
      <img
        src={picture.url}
        className="w-12 h-12 rounded-full mr-4"
        alt={name}
      />
      <div className="text-xl font-bold">{name}</div>
      <div class="viafoura">
        <vf-conversations-count vf-container-id={postId}></vf-conversations-count>
      </div>
    </div>
  )
}
