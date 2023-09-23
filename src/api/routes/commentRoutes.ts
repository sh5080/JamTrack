import { Router } from "express";
import { validateToken } from "../middlewares/jwt";
import * as commentController from "../../controllers/commentController";
import { validateRequestBody } from "../middlewares/validateRequest";
const router = Router();

/** [댓글] 댓글 생성 */
router.post(
  "/",
  validateToken,
  validateRequestBody(["postId", "comment"]),
  commentController.createComment
);

/** [댓글] 댓글 조회 */
router.get("/:postId", commentController.getCommentsByPostId);

// /** [댓글] 댓글 수정 */
// router.put(
//   "/:commentId",
//   validateToken,
//   validateRequestBody(["comment"]),
//   commentController.updateComment
// );

// /** [댓글] 댓글 삭제 */
// router.delete("/:commentId", validateToken, commentController.deleteComment);

export default router;