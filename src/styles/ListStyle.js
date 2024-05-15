import styled from "styled-components";

export const Background = styled.div`
    background: linear-gradient(
            to bottom,
            rgba(0, 23, 91, 0.7) 6%,
            rgba(19, 105, 191, 0.7) 46%,
            rgba(81, 111, 131, 0.7) 94%
        ),
        rgba(0, 0, 0, 0.4);
    background-color: #404040;

    @media (hover: hover) and (pointer: fine) {
        background: linear-gradient(
                to bottom,
                rgba(0, 23, 91, 0.7) 6%,
                rgba(19, 105, 191, 0.7) 46%,
                rgba(81, 111, 131, 0.7) 94%
            ),
            rgba(0, 0, 0, 0.4);
        background-color: none;
    }
`;

export const AdminList = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Logo = styled.img`
    width: 120px;
    height: 120px;
    margin-top: 26px;
    cursor: pointer;
`;

export const Box = styled.div`
    margin-top: 27px;
    width: 90vw;
    height: calc(100vh - 26px - 120px - 32px);
    margin-bottom: 25px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 20px;
    box-shadow: 0 4px 4px rgba(47, 123, 209, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (hover: hover) and (pointer: fine) {
        height: calc(100vh - 26px - 120px - 27px);
        margin-bottom: 54px;
    }
`;

export const BoxTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin-top: 1.5rem;
    @media (hover: hover) and (pointer: fine) {
        font-size: 40px;
    }
`;

export const BoxLine = styled.div`
    background-color: #cccccc;
    width: 300px;
    height: 1px;
    margin-top: 10px;
    display: flex;
    @media (hover: hover) and (pointer: fine) {
        width: 918px;
    }
`;

export const BoxButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: white;
    font-family: "AppleSDGothicNeo";
    font-style: normal;
    font-size: 18px;
    border: 0px;
    background-color: #448bdb;
    border-radius: 16px;
    width: 120px;
    height: 36px;
    margin-top: auto;
    margin-bottom: 13px;
    @media (hover: hover) and (pointer: fine) {
        width: 155.83px;
        height: 55px;
        font-size: 25px;
    }
`;

export const BoxList = styled.div`
    display: flex;
    width: 300.24px;
    @media (hover: hover) and (pointer: fine) {
        width: 918px;
    }
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
`;

export const ListItem = styled.li`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 10px;
`;

export const ListCategory = styled.div`
    display: flex;
    color: #2f7bd1;
    font-family: "AppleSDGothicNeo";
    font-style: normal;
    line-height: 136%;
    font-size: 12px;
    @media (hover: hover) and (pointer: fine) {
        font-size: 25px;
    }
`;

export const ListTitle = styled.div`
    display: flex;
    font-family: "AppleSDGothicNeo";
    font-style: normal;
    line-height: 136%;
    font-size: 12px;
    width: 145px;
    @media (hover: hover) and (pointer: fine) {
        width: 512px;
        font-size: 25px;
    }
`;

export const ButtonWrap = styled.div`
    display: flex;
    justify-content: space-between;
    width: 91.24px;
    @media (hover: hover) and (pointer: fine) {
        width: 253px;
    }
`;

export const ListButton = styled.button`
    width: 43.24px;
    height: 18.71px;
    border: 0px;
    background-color: #448bdb;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: white;
    font-family: "AppleSDGothicNeo";
    font-style: normal;
    font-size: 12px;
    box-shadow: 0 4px 4px rgba(47, 123, 209, 0.25);
    @media (hover: hover) and (pointer: fine) {
        font-size: 25px;
        width: 109.57px;
        height: 38.67px;
    }
`;