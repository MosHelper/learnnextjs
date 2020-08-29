import useMongoose from "../../../utils/useMongoose";
import Todo from "../../../models/Todo";
import resError from "../../../utils/useResError";

useMongoose();

export default async (req, res) => {

    const { method } = req;

    switch (method) {

        /**
         * Get Todo List
         */
        case 'GET':
            try {
                const todos = await Todo.find({}).sort({ _id: -1 });

                res.status(200).json({ todos });
            } catch (error) {
                resError(res, 400, error);
            }
            break;

        /**
        * Store Todo List
        */
        case 'POST':
            try {
                const todo = await Todo.create(req.body);

                res.status(201).json({ todo });
            } catch (error) {
                console.error(error);
                resError(res, 400, error);
            }
            break;
        /**
         * Other
         */
        default:
            resError(res, 405, { message: 'Method not allowed.' });
            break;
    }

}