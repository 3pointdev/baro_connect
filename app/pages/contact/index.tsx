import {
  faArrowLeft,
  faPenToSquare,
  faUserLock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Category from "components/combinations/list/category";
import PageArticle from "components/divisions/article/pageArticle";
import Linker from "components/divisions/linker/linker";
import { PageProps } from "pages/page.type";
import { selectUserState } from "src/redux/reducers/auth/userReducer";
import { selectContactState } from "src/redux/reducers/contact/contactReducer";
import { useAppSelector } from "src/redux/reduxHook";

export default function Contact(props: PageProps) {
  const user = useAppSelector(selectUserState);
  const contact = useAppSelector(selectContactState);

  return (
    <PageArticle addClass="pt-16 p-4 flex flex-col gap-16">
      <button
        className="p-2 flex items-start fixed top-2 left-2"
        onClick={() => props.router.back()}
      >
        <FontAwesomeIcon icon={faArrowLeft} size="xl" />
      </button>
      <section className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">고객센터</h1>
        <div className="">
          <h3 className="pl-4 text-xl">자주 묻는 질문</h3>
          <Category list={contact.category} spaceBetween={"8%"} />
          <div className="border w-full h-[50vh] rounded-lg mt-4"></div>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        {!user.isLogin && (
          <Linker href="/find" notLoginable>
            <div className="flex items-center gap-4">
              <FontAwesomeIcon
                icon={faUserLock}
                size="sm"
                width={18}
                height={18}
              />
              <p className="text-lg font-semibold">비밀번호를 잊어버렸습니다</p>
            </div>
          </Linker>
        )}
        <Linker href="/" notLoginable>
          <div className="flex items-center gap-4">
            <FontAwesomeIcon
              icon={faPenToSquare}
              size="sm"
              width={18}
              height={18}
            />
            <p className="text-lg font-semibold">원하는 문의사항이 없습니다</p>
          </div>
        </Linker>
      </section>
    </PageArticle>
  );
}
