import styled from "styled-components";

export const Container = styled.div`
    max-width: 100vw;
    right: 0;
    padding: 20px 36px 4px 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 22px;
    position: relative;

    .inputs {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 10px;
    }

    .sectionTitle {
        width: 100%;
        height: 18px;
        font-family: "Quicksand", sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: #5C5C5C;
        text-align: center;
    }

    .matter,.content {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1px;
        padding-right:14.85px;

        p {
            font-family: "Roboto", sans-serif;
            font-weight: 700;
            font-size: 16px;
            line-height: 19px;
            color:#ED7839;
        }

        input,textarea{
            width: 100%;
        }

        input {
            height: 39px;
            font-family: 'Quicksand', sans-serif;
            font-weight: 400;
            font-size: 14px;
            line-height: 18px;
            color: #4D4D4D;
            border: 1px solid #CCCCCC;
            border-radius: 3px;
            padding-left: 23.13px
        }

        textarea {
            resize: none;
            border-radius: 3px;
            border: 1px solid #CCCCCC;
            font-family: 'Quicksand', sans-serif;
            font-weight: 400;
            font-size: 14px;
            line-height: 18px;
            padding-left: 23.13px;
            color: #4D4D4D;
        }

        .controls {
            width: 100%;
            height: 31px;

            display: flex;
            align-items: center;
            justify-content: space-between;
            border: 1px solid #CCCCCC;
            border-radius: 0px 0px 4px 4px;
            background-color:#EAF1F2;

            .text-edit {
                width: 77px;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 30.84px;
                padding-left: 29.3px;

                .icon {
                    cursor: pointer;
                }
            }
            
            .sendButton {
                width: 205px;
                height: 100%;
                color: #FFF;
                font-family: 'Quicksand', sans-serif;
                font-weight: 700;
                font-size: 15px;
                line-height: 16px;
                border: none;
                background: linear-gradient(180deg, #FEB154 0%, #F1833E 100%);
                border-radius: 0px 0px 4px 0px;
                cursor: pointer;
            }
        }
    }

    .show {
        display: flex;
    }

    .hidden {
        display: none;
    }
`

export const ErrorModal = styled.div`
    width: 700px;
    height: 300px;
    background-color: white;
    position: absolute;
    top: 0;
    left: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #ED7839;
    border: 1px solid #CCCCCC;
    border-radius: 4px;
    transition: all 0.3s ease;
`