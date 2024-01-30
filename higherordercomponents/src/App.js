import { checkProps } from "./components/check-props";
import { includeUser } from "./components/include-user";
import { UserInfoForm } from "./components/user-form";
import { UserInfo } from "./components/user-info";

const UserInfoWrapper = checkProps(UserInfo);
const UserInfoWithLoader = includeUser(UserInfo, "3");

function App() {
  return (
    <>
      <UserInfoWrapper test={"test"} b="i am b" />
      <UserInfoWithLoader />
      <UserInfoForm />
    </>
  );
}

export default App;
