const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existe = await User.findOne({ email });
    if (existe) return res.status(400).json({ message: 'Usuario ya existe' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const nuevoUsuario = new User({ username, email, password: hashedPassword });
    await nuevoUsuario.save();

    res.status(201).json({ message: 'Usuario creado correctamente' });
  } catch (err) {
    res.status(500).json({ message: 'Error al registrar' });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const usuario = await User.findOne({ username });
    if (!usuario) return res.status(404).json({ message: 'Usuario no encontrado' });

    const match = await bcrypt.compare(password, usuario.password);
    if (!match) return res.status(401).json({ message: 'Contraseña incorrecta' });

    const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token, username: usuario.username });
  } catch (err) {
    res.status(500).json({ message: 'Error al iniciar sesión' });
  }
};
