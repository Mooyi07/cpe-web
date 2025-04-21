import PostingTab from "../components/PostingTab";
import { announcements } from "../data/dummyAnnouncements";
import Layout from "../layouts/Layout";

export default function AnnouncementsPage() {
  return (
    <Layout>
        <PostingTab posts={announcements} />
    </Layout>
);
}
