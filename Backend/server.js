const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
require('dotenv').config();
//Routes
const userRoutes = require('./routes/user-route');
// const feedbackRoutes = require('./routes/feedback-routes');
// const advertismentRoutes = require('./routes/advertisment-route');
// const instructorRoutes = require('./routes/instructor-route');
// const packageRoutes = require('./routes/package-route');
// const workoutRoutes = require('./routes/workout-route');
// const productRoutes = require('./routes/product-route');
// const orderRoutes = require('./routes/order-route');
// const progressRoutes = require('./routes/progress-route');
// const mealplanRoutes = require('./routes/mealplan-routes');

const awsRoutes = require('./routes/aws-route');
const topicRoutes = require('./controllers/Topic')

const app = express();
app.use(cors());
connectDB();

//Init middleware
app.use(express.json({ extended: false }));

app.use('/api/auth', userRoutes);
// app.use('/api/feedback', feedbackRoutes);
// app.use('/api/advertisment', advertismentRoutes);
// app.use('/api/instructor', instructorRoutes);
// app.use('/api/package', packageRoutes);
// app.use('/api/workout', workoutRoutes);
// app.use('/api/product', productRoutes);
// app.use('/api/order', orderRoutes);
app.use('/api/aws', awsRoutes);
// app.use('/api/progress', progressRoutes);
// app.use('/api/mealplan', mealplanRoutes);
app.use("/api/topics", topicRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${5000}`));
