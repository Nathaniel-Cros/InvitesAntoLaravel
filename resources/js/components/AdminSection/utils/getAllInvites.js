const GetAllInvites = async () => {
    const data = await fetch('/api/info-invites')
    return await data.json();
}

export default GetAllInvites
