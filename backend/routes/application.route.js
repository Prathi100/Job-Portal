import express from "express";
import isAuthenticated from "../middleware/isAuthenticated.js";
import { applyJob, getApplicants, getAppliedJobs, updateStatus } from "../controllers/application.controller.js";

const router = express.Router();

// Apply for a job
router.route("/apply/:id").post(isAuthenticated, applyJob);

// Get jobs applied by the logged-in user
router.route("/my-applications").get(isAuthenticated, getAppliedJobs);

// Admin: Get applicants for a job
router.route("/applicants/:id").get(isAuthenticated, getApplicants);

// Update application status
router.route("/application/:id/status").post(isAuthenticated, updateStatus);

export default router;
