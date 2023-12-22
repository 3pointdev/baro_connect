import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageArticle from "components/divisions/article/pageArticle";
import ValidButton from "components/divisions/button/validButton";
import CheckBox from "components/divisions/input/checkBox";
import ValidInput from "components/divisions/input/validInput";
import Linker from "components/divisions/linker/linker";
import pageUrlConfig from "config/pageUrl.config";
import { PageProps } from "pages/page.type";
import { ChangeEvent } from "react";
import {
  changeLoginValue,
  selectLoginState,
  toggleAutoLogin,
} from "src/redux/reducers/auth/loginReducer";
import { useAppDispatch, useAppSelector } from "src/redux/reduxHook";

export default function Login(props: PageProps) {
  const dispatch = useAppDispatch();
  const state = useAppSelector(selectLoginState);

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    dispatch(changeLoginValue({ id, value }));
  };

  const handleToggleAutoLogin = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    dispatch(toggleAutoLogin(checked));
  };

  return (
    <PageArticle addClass="p-4 pt-16 flex flex-col gap-8 items-center justify-center">
      <button
        className="p-2 flex items-start fixed top-2 left-2"
        onClick={() => props.router.back()}
      >
        <FontAwesomeIcon icon={faArrowLeft} size="xl" />
      </button>
      <section className="w-full">
        <h2 className="text-lg font-bold">바로팩토리</h2>
        <h2 className="text-3xl font-bold">로그인</h2>
      </section>
      <section className="w-full flex flex-col gap-4 text-lg">
        <ValidInput
          value={state.model.email}
          onChange={handleChangeValue}
          placeholder={"로그인 할 이메일을 입력해 주세요"}
          id="email"
          label="이메일"
          type="text"
          valid={""}
          validMessage={""}
        />
        <ValidInput
          value={state.model.password}
          onChange={handleChangeValue}
          placeholder="비밀번호를 입력해 주세요"
          id="password"
          label="비밀번호"
          type="password"
          valid={""}
          validMessage={""}
        />
        <CheckBox
          checked={state.model.autoLogin}
          onChange={handleToggleAutoLogin}
          id="auto_login"
          label="자동로그인"
        />
      </section>
      <section className="w-full">
        <ValidButton title="로그인" onClick={(e) => {}} />
      </section>
      <section className="flex items-center justify-around w-full">
        <Linker href={pageUrlConfig.contact} notLoginable>
          로그인에 문제가 있습니까?
        </Linker>
        <Linker href={pageUrlConfig.join} notLoginable>
          회원가입
        </Linker>
      </section>
    </PageArticle>
  );
}
