import { body } from 'express-validator';

export const loginValidation = [
    body('email', 'Incorrect email').isEmail(),
    body('password', 'password must be min 5 symbols').isLength({ min: 5 }),
];

export const registerValidation = [
    body('email', 'Incorrect email').isEmail(),
    body('password', 'password must be min 5 symbols').isLength({ min: 5 }),
    body('fullName', 'Type your name').isLength( {min: 3} ),
    body('avatarUrl', 'Wrong avatar URL').optional().isURL(),
];

export const postCreateValidation = [
    body('title', 'Enter the title name').isLength( { min: 3 } ).isString(),
    body('text', 'Enter the text').isLength({ min: 10 }).isString(),
    body('tags', 'Wrong tags format (enter list)').optional().isString(),
    body('imageUrl', 'Wrong image URL').optional().isString(),
];
