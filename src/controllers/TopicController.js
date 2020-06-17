import FirebaseCloudMessaging from "../services/FirebaseCloudMessaging";

class TopicController {
  async register(req, res) {
    const { token } = req.body;
    try {
      const result = await FirebaseCloudMessaging.regTopic(token);

      return res.json(result);
    } catch (error) {
      return res.json(error);
    }
  }
  async unregister(req, res) {
    const { token } = req.body;
    try {
      const result = await FirebaseCloudMessaging.unregTopic(token);

      return res.json(result);
    } catch (error) {
      return res.json(error);
    }
  }
}

export default new TopicController();
