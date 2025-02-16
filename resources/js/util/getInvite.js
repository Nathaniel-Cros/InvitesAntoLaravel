const GetInvite = async (uuid) => {
    const data = await fetch( `/api/info-invite/${uuid}`)
    return await data.json();
}

export default GetInvite
