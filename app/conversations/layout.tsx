import getConversations from "../action/getConversations";
import Sidebar from "../components/sidebar/Sidebar";
import ConversationList from "./components/ConversationList";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversation = await getConversations();
  return (
    <Sidebar>
      <div className="h-full">
        <ConversationList initialItems={conversation} />
        {children}
      </div>
    </Sidebar>
  );
}
