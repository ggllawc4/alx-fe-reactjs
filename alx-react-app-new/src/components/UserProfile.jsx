const UserProfile = (props) => {
    return (
        <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '8px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <h2 style={{ color: 'blue', fontSize: '1.5rem', marginBottom: '8px' }}>{props.name}</h2>
            <p>Age: <span style={{ fontWeight: 'bold', color: 'darkgreen' }}>{props.age}</span></p>
            <p style={{ marginTop: '5px', fontStyle: 'italic' }}>Bio: {props.bio}</p>
        </div>
    );
};

export default UserProfile;