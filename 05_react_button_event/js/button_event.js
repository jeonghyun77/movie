/* 대문자로 시작하는것은 파스칼 표기법.
두번째 있는단어가 커지는 것은 카멜 표기법 */



class AppComponent extends React.Component { 
   /*  static defaultProps = {
        title:'AppComponent 타이틀~~',

    } */
    //상태관리
    constructor(){    //생성자 함수
        super();        //밑에 있는 this를 사용하기 위함
        this.state = {      //현재상태
            arr: [],
            cnt:0,
            title2: '상태관리에서 타이틀입니다'
        }
    }

    //클래스의 루트(생성자) 영역
    //변수가 필요하지않음
    onClickEventThis = (e) => {
        e.preventDefault();
        alert('버튼4 클래스 컴포넌트 루트영역에서 함수 호출 방식이며 반드시 this 호출해야함')
    }

    render() {

        const {title} = this.props;
        //render위치의 함수는 무조건 변수에 담아서 사용해야함.
        //화살표 함수로 사용
        const onClickEvent = (e) => {
            e.preventDefault();
            alert('버튼3 함수 호출 방식');
        }
        return (
            <div id='app'>
                {/* <h1>클래스형 앱 컴포넌트 프롭스 멤버변수 {this.props.title}</h1>   구조분할 할당 전 */}
                <h1>클래스형 앱 컴포넌트 프롭스 멤버변수 {title}</h1>   {/* 구조분할 할당 후  (this.props를 없앤다.)*/}
                <h2>클래스형 앱 컴포넌트 상태관리 멤버변수{this.state.title2}</h2>

                <button onClick={ () => {alert('버튼1 클릭 이벤트')}}>버튼1</button>
                <button
                onClick={
                    (e) => {
                        e.preventDefault();
                        alert('버튼2 클릭 이벤트')
                    }
                }
                >버튼2</button>
                {/* 버튼이벤트 함수생성하고 랜더함수 위치에서 함수 이름만으로 호출하는 방식 */}
                <button onClick={onClickEvent}>버튼3</button>
                {/* 클래스 컴포넌트 루트영역에서 함수 호출하는 방법으로 반드시 this사용하여 호출하는 방식 */}
                <button onClick={this.onClickEventThis}>버튼4</button>
            </div>
        );
    }
}


AppComponent.defaultProps={
    title:'AppComponent 밖에서 사용하는 프롭스 타이틀'
}

ReactDOM.render(
    <AppComponent />,
    document.getElementById('root')
);















/* 상태관리
컨스트럭터(constuctor(){})
슈퍼 super();
this.State() 상태를 멤버변수 관리(객체구성)
setState() 상태변경 */

/* 이벤트
onclick={() => {}} */