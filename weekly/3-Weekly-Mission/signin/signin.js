import { remove_error, error_event, email_valid, password_valid, eye_change,
  checkSignin, login_btn_check, email_input, email_error, password_input, password_error
  } from "../module.js";

//로그인 버튼
const login_btn = document.querySelector('.login_btn');

//패스워든 눈 아이콘
const eye_off = document.querySelector('.eye_off')

//이메일 체크해주는 함수
function email_check(){
  if(email_input.value === ""){
    error_event(email_error, email_input, '이메일을 입력해주세요')
    return false;
  }
  if(!email_valid(email_input.value)){
    error_event(email_error, email_input, '올바른 이메일 주소가 아닙니다.')
    return false;
  }
    remove_error(email_input, email_error);
    return true;
};
email_input.addEventListener('focusout', email_check);

// 비밀번호 없으면 경고하는 함수
function password_check(){
  if(password_input.value === ""){
    error_event(password_error, password_input, '비밀번호를 입력해주세요')
    return false;
  }
  if(!password_valid(password_input.value)){
    error_event(password_error, password_input, '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요');
    return false;
  }  
    remove_error(password_input, password_error);
    return true;
};
password_input.addEventListener('focusout', password_check);

//눈모양 바꾸기
eye_off.addEventListener('click', () =>{
  eye_change(password_input, eye_off)
})

// 로그인시 folder 페이지로 이동하는 함수
function move_to_folder_page(){
  const checked = login_btn_check();
  if(checked){
    console.log(checked)
    checkSignin();
  }
};
login_btn.addEventListener('click', move_to_folder_page);

