import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
// import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import Favorite from '@material-ui/icons/Favorite';
import Button from 'components/CustomButtons/Button.js';
import { cardTitle } from "assets/jss/material-kit-react.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";


const styles = {
    cardTitle,
    textCenter: {
        textAlign: "center"
    },
    textMuted: {
        color: "#6c757d"
    },
};

const useStyles = makeStyles(styles);

export default function Cards() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <div className={classes.container}>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={8}>
                        <Card className={classes.textCenter}>
                            {/* <CardHeader color="default"></CardHeader> */}
                            <CardBody>
                                <h4 className={classes.cardTitle}>내 사랑 서렁둥이야 ♡</h4>
                                <p>
                                서원아 우리 2000일이다! 축하해♡ 오랫동안 함께여서 감사하고 행복해. 
                                2000일이라는건 사실 예전엔 생각조차도 잘 안되던 거였는데 이제 우리는 말 그대로 2000일 기념을 하고있네 ㅎㅎ
                                기념일이라는건 시간이 지나고 지나면서 그 오래됨과 추억들을 기리는 날이라 생각해. 
                                우리가 함께해왔던 수많은 날들과 그와함께 성장해왔던 우리의 연애가 그동안의 희노애락을 설명해주는것 같아 기분이 묘해 
                                
                                    
        </p>
        <p>
        이번 학기 중에 서원이 먼저 한국 들어가고 미국에 내가 혼자 남아있으면서,
                                    취업 준비와 학업, 그리고 홀로 있는 외로움을 버티면서 어떤 생각을 했게?
                                    내가 기필코 취업 떡하니 하고 이번 겨울에 한국 들어가서 서원이와 행복한 시간을
                                    많이 보내리라 다짐했어 ㅋㅋ 결론적으로 학기도 잘 끝내구 취업도 잘 마무리 된 상태로
                                    한국에서 서원이와 함께 2000일을 행복하게 보낼 수 있다는게 나는 너무너무 감사하더라구.
                                    내게 주어진 이 모든게 사실 서원이가 없었다면 이뤄내지 못했을거라는 생각을 자주 해.
                                    내게 서원이라는 존재는 나의 앞길을 밝혀주고 미래를 보여주는 길라잡이야. 서원이와
                                    함께 하고부터 내게 복이 넝쿨채 굴러들어온걸 보면, 서원이는 말 그대로 복덩이가 맞나봐!
                                    ㅎㅎ
        </p>
                                <p>
                                    요즘 결혼 얘기 오가면서 이런 저런 걱정이 많아지구 나와도 전에는 다투지 않았던 문제들로
                다투기도 했잖아? {'"'} 내가 느끼는 힘듦보다 서원이가 느끼는 힘듦이 더 클텐데,
                그만큼 힘들지 않게 내가 잘 해야 하는데... {'"'} 라는 생각과 죄책감이 꽤 많았던
                것 같아. 항상 서원이에게 미안한 마음이 가득하고, 내가 앞으로 잘 해낼 수 있을까 라는
                걱정도 생기고. 하지만 그때마다 서원이의 이야기를 경청하다 보면
                우리의 앞길이 한층 더 밝아진듯 한 느낌이 들더라구. 하나 하나 헤쳐나갈 때 마다
                서원이라는 사람이 더 멋있어보이고, 이 사람과 평생을 함께 할 수 있다면 나는
                정말 행복하고 복받은 사람이겠구나 싶더라. 하루를 온전히 서원이와 보낸 날에는
                하루 끝에 보람이 가득 차. 언제나 내 곁에서 나를 더 나은 사람으로 만들어줘서
                고맙고, 이젠 나도 서원이를 더욱 행복한 사람으로 만들어볼게.
        </p>
                                <p>
                                    엄청 오래 함께해왔지만 그보다 더 더 오래 함께하고픈, 모든 걸 다 갖춘 예쁘고 귀엽고 또크또크하고 지혜롭고 총명하고 착하고 참한 내 사람 서원아!
                                    그 예쁜 얼굴에 눈물 고이지 않게, 항상 방실방실 웃는 얼굴 지을 수 있게 노력할게.
        </p>
                                <p>
                                    상록수, 기억하지?
        </p>
                                <p>
                                    항상 푸르르게 서원이와 함께할게. 우리의 2000일 다시 한번 축하하고 많이 사랑해♡
        </p>
                                <Button justIcon round color="primary"><Favorite style={{ color: "#FFFFFF" }} /></Button>
                                {/* <Button color="primary">Do Something</Button> */}
                            </CardBody>
                            <CardFooter className={classes.textMuted}>
                                01.05.2021   - 서원이의 영원한 반쪽, 승구리가.
      </CardFooter>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}