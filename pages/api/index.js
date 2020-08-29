import resError from "../../utils/useResError";

export default (req, res) => {
    
    const { method } = req;

    switch (method) {

        /**
         * Get Api Ready
         */
        case 'GET':
            res.status(200).json({ message: 'Api ready to use.' });
            break;

        /**
         * Other
         */
        default:
            resError(res, 405, { message: 'Method not allowed.' });
            break;
    }

}