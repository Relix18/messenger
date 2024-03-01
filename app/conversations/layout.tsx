import getConversations from "../action/getConversations";
import getUsers from "../action/getUsers";
import Sidebar from "../components/sidebar/Sidebar";
import ConversationList from "./components/ConversationList";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversation = await getConversations();
  const users = await getUsers();

  return (
    <Sidebar>
      <div className="h-full">
        <ConversationList users={users} initialItems={conversation} />
        {children}
      </div>
    </Sidebar>
  );
}
