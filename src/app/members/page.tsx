import Heading2 from "@/components/Heading2";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto p-4 flex flex-col gap-6 leading-loose">
      <div>
        <Heading2>협회원 등록</Heading2>
        백합진흥연구협회원으로 등록 또는 탈퇴하기 위해서는{" "}
        <a href="mailto:uher0000@gmail.com">uher0000@gmail.com</a>으로 등록
        신청서를 보내주세요.
      </div>
      <div>
        <Heading2>협회원 소개</Heading2>
        <p>백합진흥연구원 : 공석</p>
        <p>백합이론탐구원 : 공석</p>
        <p>백합연성생산원 : 공석</p>
        <p>백합창작지원원 : 공석</p>
        <p>백합작품비평원 : 공석</p>
        <p>백합문화전파원 : 공석</p>
        <p>백합문화보존원 : 공석</p>
        <p>백합미학연구원 : 공석</p>
        <p>백합작품수집원 : 공석</p>
        <p>백합네비게이터 : 공석</p>
      </div>
    </div>
  );
}
