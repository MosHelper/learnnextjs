const resError = (res, status = 500, error) => {
    return res.status(status).json({ error });
}

export default resError;