import { DataTypes } from "sequelize";
import { db } from "../config/database.js";
import { User } from "./user.js";

export const Message = db.define(
    'messages',
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            unique: true,
            primaryKey: true
        },
        recipient: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // sender_id: {
        //     type: DataTypes.UUID,
        //     allowNull: false,
        //     references: {
        //         model: User,
        //         key: 'id'
        //     }
        // }
    },
    { timestamps: false }
)

// Message.belongsTo(User, { foreignKey: 'sender_id' })
// User.hasMany(Message, { foreignKey: 'sender_id' })

