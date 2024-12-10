const UserCard = ({ user }) => (
    <div className="border p-4 rounded shadow text-center">
      <img src={user.avatar_url} alt={user.login} className="w-16 h-16 mx-auto rounded-full" />
      <h2 className="text-lg font-bold mt-2">{user.name || user.login}</h2>
      <p>{user.bio || 'No bio available.'}</p>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600">
        View Profile
      </a>
    </div>
  );
  
  export default UserCard;