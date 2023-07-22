import Authorization from "./authorization";
import TestManagement from "./testManagement";


class RootStore {
 auth = Authorization
 testManagement = TestManagement
}

export default RootStore