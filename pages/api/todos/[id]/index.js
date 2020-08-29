import useMongoose from "../../../../utils/useMongoose";
import Todo from "../../../../models/Todo";
import resError from "../../../../utils/useResError";

useMongoose();

export default async (req, res) => {

    const { method, query: { id } } = req;

    switch (method) {

        /**
        * Delete todo.
        */
        case 'DELETE':
            try {
                await Todo.findByIdAndDelete({ _id: id });

                res.status(205).json({});
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