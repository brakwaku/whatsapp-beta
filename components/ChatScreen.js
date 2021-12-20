import styled from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { useRouter } from "next/router";

const ChatScreen = ({chat, messages}) => {
    const router = useRouter();
    const [user] = useAuthState(auth);

    return (
        <Container>
            <Header></Header>
        </Container>
    )
}

export default ChatScreen

const Header = styled.div``;
const Container = styled.div``;