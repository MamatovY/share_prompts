import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Электронная почта уже существует!'],
        required: [true, 'Требуется электронная почта!']
    },
    username: {
        type: String,
        required: [true, 'Требуется имя пользователя!'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
            "Имя пользователя недопустимо, оно должно содержать 8-20 буквенно-цифровых символов и быть уникальным!"]
    },
    image: {
        type: String
    }
})

const User = models.User || model('User', UserSchema)

export default User