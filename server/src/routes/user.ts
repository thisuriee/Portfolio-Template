import { Router } from 'express';
import { getUsers, updateProfile, deleteAccount } from '../controllers/userController';
import { protect, authorize } from '../middleware/auth';

const router = Router();

// All routes are protected
router.use(protect);

router.get('/', authorize('admin'), getUsers);
router.put('/profile', updateProfile);
router.delete('/profile', deleteAccount);

export default router;