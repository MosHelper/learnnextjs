import useMongoose from "../../../../utils/useMongoose";
import Todo from "../../../../models/Todo";
import resError from "../../../../utils/useResError";

useMongoose();

export default async (req, res) => {

    const { method, query: { id } } = req;

    switch (method) {

        /**
        * Update isCompleted todo.
        */
        case 'POST':
        case 'PUT':
            try {
                const todo = await Todo.findOneAndUpdate({ _id: id }, { isCompleted: true }, { new: true });

                res.status(200).json({ todo });
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