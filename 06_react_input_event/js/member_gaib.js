class App extends React.Component {
    //상태관리 위치
    constructor(props){ //props 속성
        super(props);
        this.refId=React.createRef(); //Ref(reference) 1번째
        this.state = {
            번호: 1,
            아이디: '',
            비밀번호: '',
            이름: '',
            이메일: '',
            회원: [],
            수정하기:false
        }
    }
    onChangeId = (e) => { //이 위치는 const 쓰지 않음(render 안에서 쓸 경우 const쓰기)
        //console.log(e.target.value)
        //새로 바뀌는 내용(setState())
        this.setState({
            아이디: e.target.value //form 태그 사용자가 쓰는 값으로 채우기
        });
    }
    onChangePw = (e) => {
        this.setState({
            비밀번호: e.target.value
        });
    }
    onChangeName = (e) => {
        this.setState({
            이름: e.target.value
        });
    }
    onChangeEmail = (e) => {
        this.setState({
            이메일: e.target.value
        })
    }
    // 버튼 클릭하면 사용자가 입력한 데이터 저장할 공간이 필요> 개발자도구 application - Local Storage
    onClickAdd = (e) => {
        //submit 버튼을 클릭하면 새로고침, jsp,asp,php 등의 페이지로 이동하는 기본값 차단
        e.preventDefault();
        //데이터 로컬 스토리지에 저장하기
        //데이터 관리 : crud(create, read, update, delete)
        //localStorage.length; 전체 길이(갯수)
        //localStorage.setItem(키(key), 키값(value)); 데이터(문자열) 저장
        //localStorage.getItem(키(key)); 데이터 가져오기
        //localStorage.removeItem(키(key)); 데이터 삭제하기
        
        //localStorage.setItem(`num-${localStorage.length+1}`, `${this.state.아이디}, ${this.state.비밀번호}, ${this.state.이름}, ${this.state.이메일}`) //0번부터 카운트해서 +1

        //로컬 스토리지에 저장될 객체 임시 생성
        let member = {
            번호: this.state.번호,
            아이디: this.state.아이디,
            비밀번호: this.state.비밀번호,
            이름: this.state.이름,
            이메일: this.state.이메일,
        }
        //데이터 저장: 객체형식(object)으로 저장
        //로컬스토리지에는 객체형식으로 저장 못함 > 문자열 형식으로 변경(JSON.stringify())
        //자동증가: this.state.번호+1; 다음 번호
        localStorage.setItem(member.번호, JSON.stringify(member))
        this.memberListLoad(); //초기화되면 미리 데이터 가져오게

        //add누르면 다음 새로운 값을 입력하도록 input 입력창 비우기(초기화)
        //번호가 1씩 증가
        //this.setState({번호: this.state.번호+1})
       this.setState({
        아이디:'',
        비밀번호:'',
        이름:'',
        비밀번호:'',
        이메일:'',
        수정하기:false
       });
        this.refId.current.focus(); //Ref(reference) 3번째

        //Ref(reference): 초기화하고 커서가 아이디에서 깜빡거리도록 포커스 생성(아이디.focus())
        //1. DOM 요소를 생성해서 등록한다. root.변수생성 this.redId=React.createRef();
        //2. input 선택자 요소에 등록 연결 (ref=this.refId)
        //3. 초기화 위치에 포커싱 (this.refId.current.focus();)
    }

    memberListLoad = () => { //시작하자마자 가져오도록
        let 멤버 = [];
        for(let i=0; i<localStorage.length; i++){
            멤버.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }

        this.setState({
            회원: 멤버
        })

        let max=0;
        for(let i=0; i<localStorage.length; i++){
            if(max < Number(localStorage.key(i))){
                max= Number(localStorage.key(i))
            }
        }
        this.setState({번호: max+1})
    }

    //데이터 가져오기 (컴포넌트 디드마운트(생명주기))
    componentDidMount(){
        this.memberListLoad();
        /* console.log(localStorage.getItem(1))
        console.log(localStorage.getItem(2))
        console.log(localStorage.getItem(localStorage.key(0))); */

        //키값 가져오기 - 아래 빈 td에 데이터 넣기
        //console.log(localStorage.key(0));
        //console.log(localStorage.key(1));
        //console.log(localStorage.key(2));

        //for(let i=0; i<localStorage.length; i++){
            //console.log(JSON.parse(localStorage.getItem(localStorage.key(i)))) //JSON.parse(): 문자열을 객체로 만들기 위해
        //}

        //let 멤버 = [];
        //for(let i=0; i<localStorage.length; i++){
        //    멤버.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        //}
        //console.log('멤버', 멤버)

        //this.setState({
        //    회원: 멤버
        //})
    }

    //삭제버튼
    onClickDeletefn = (deleteBun) => {
        localStorage.removeItem( deleteBun );
        this.memberListLoad();  //모든데이터 변경 업데이트 출력정보 출력
    }
   
    //수정하기 함수
    onClickUpdatefn = (updateBun) =>{

        let imsiObj = {}
        imsiObj=JSON.parse(localStorage.getItem(updateBun));

        this.setState({
            번호: updateBun,
            아이디 : imsiObj.아이디,
            비밀번호 : imsiObj.비밀번호,
            이름 : imsiObj.이름,
            이메일 : imsiObj.이메일,
            수정하기 : true,
            
        })
    }


    render(){
        return (
            <div id="app">
                <h1>회원가입</h1>
                <div id="member">
                    {/**onChange 함수: 이벤트로 내용 변경 감지 */}
                    {/**Ref(reference) 2번째*/}
                    <form onSubmit={this.onClickAdd}>
                        <div><input ref={this.refId} onChange={this.onChangeId} type="text" id='id' value={this.state.아이디} placeholder='Id 입력'/></div>
                        <div><input onChange={this.onChangePw} type="password" id='password' value={this.state.비밀번호} placeholder='Password 입력'/></div>
                        <div><input onChange={this.onChangeName} type="text" id='name' value={this.state.이름} placeholder='Name 입력'/></div>
                        <div><input onChange={this.onChangeEmail} type="email" id='email' value={this.state.이메일} placeholder='Email 입력'/></div>
                        <div><button type='submit' style={this.state.수정하기 ? style2: style1}>{this.state.수정하기? `UPDATE`:`ADD`}</button></div>
                    </form>
                </div>
                <ListComponent 회원={this.state.회원}  onClickDeletefn={this.onClickDeletefn} onClickUpdatefn={this.onClickUpdatefn}/>
            </div>
        )
    }
}
class ListComponent extends React.Component{
    //삭제하기
    onClickDelete=(e, bun)=>{
        e.preventDefault();
        this.props.onClickDeletefn(bun)
    }
    onClickUpdate=(e, bun)=>{
        e.preventDefault();
        this.props.onClickUpdatefn(bun)
    }
    render(){

        return(
            <div className="list-box">
                    <table>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>아이디</th>
                                <th>비밀번호</th>
                                <th>이름</th>
                                <th>이메일</th>
                                <th>수정</th>
                                <th>삭제</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.회원.map((item) => {
                                    return(
                                        <tr key={item.번호}> {/**리액트는 반복되는 요소가 나오면 안돼서 tr에 키값을 줘야함*/}
                                            <td>{item.번호}</td>
                                            <td>{item.아이디}</td>
                                            <td>{item.비밀번호}</td>
                                            <td>{item.이름}</td>
                                            <td>{item.이메일}</td>
                                            <td><button onClick={ (e) => {this.onClickUpdate(e, item.번호)}}>수정</button></td>
                                            <td><button onClick={ (e) => {this.onClickDelete(e, item.번호)}}>삭제</button></td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
        )
    }
}

const style1={
    color: '#069',
    fontSize:'16px'
}
const style2={
    color: '#944',
    fontSize:'16px'
}

//돔에 연결
ReactDOM.render(
    <App />,
    document.getElementById('root')
);