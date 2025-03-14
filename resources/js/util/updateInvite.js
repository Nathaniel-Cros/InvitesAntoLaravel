const UpdateInvite = async (uuid, request) => {
    const data = await fetch(`/api/info-invite/${uuid}`,{
        method: 'patch',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
    })
    return await data.json();
}

export default UpdateInvite
