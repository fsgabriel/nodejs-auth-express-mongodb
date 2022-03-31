import UsersModel from '../model/userModel.js';

const register = async (req, res) => {
  try {
    const { body } = req;

    if (!body.fistName || !body.lastName)
      throw new Error('Missing first or last name');

    const user = {
      name: `${body.fistName} ${body.lastName}`,
      login: body.login,
      email: body.email,
      password: body.password,
      passwordConfirm: body.passwordConfirm,
    };

    const newUser = await UsersModel.create(user);

    res.status(201).json({ status: 'ok', data: newUser });
  } catch (error) {
    res.status(400).json(error);
  }
};

export { register };
