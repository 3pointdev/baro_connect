import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageArticle from "components/divisions/article/pageArticle";
import ValidButton from "components/divisions/button/validButton";
import ValidInput from "components/divisions/input/validInput";
import { PageProps } from "pages/page.type";
import { ChangeEvent } from "react";
import {
  changeFindValue,
  selectFindState,
} from "src/redux/reducers/auth/findReducer";
import { useAppDispatch, useAppSelector } from "src/redux/reduxHook";

import { useEffect } from "react";
import { setIsMobile } from "src/redux/reducers/auth/userReducer";

export default function Find(props: PageProps) {
  const state = useAppSelector(selectFindState);
  const dispatch = useAppDispatch();

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    dispatch(changeFindValue({ id, value }));
  };

  useEffect(() => {
    dispatch(setIsMobile(props.isMobile));
  }, [props.isMobile]);

  return (
    <PageArticle addClass="p-4 flex flex-col gap-8 items-center justify-center">
      <button
        className="p-2 flex items-start fixed top-2 left-2"
        onClick={() => props.router.back()}
      >
        <FontAwesomeIcon icon={faArrowLeft} size="xl" />
      </button>
      <section className="w-full ">
        <h2 className="text-lg font-bold">바로팩토리</h2>
        <h2 className="text-3xl font-bold">비밀번호 찾기</h2>
      </section>
      <section className="w-full flex flex-col gap-4 text-lg">
        <ValidInput
          value={state.model.email}
          onChange={handleChangeValue}
          placeholder={"이메일을 입력해 주세요"}
          id="email"
          label={"이메일"}
          type="text"
          valid={""}
          validMessage={""}
        />
      </section>
      <section className="w-full">
        <ValidButton title="비밀번호 찾기" onClick={(e) => {}} />
      </section>
    </PageArticle>
  );
}
