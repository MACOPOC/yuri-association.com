import Heading2 from "@/components/Heading2";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto p-4 flex flex-col gap-6 leading-loose">
      <div>
        <Heading2>백합애호가자격증</Heading2>
        <p>
          백합애호가자격증은 백합에 대한 깊은 이해와 애정을 인증하는 특별한
          증명서입니다.
          <br />이 자격증은 백합에 대한 전반적인 지식을 평가하는 시험을 통해
          백합을 더욱 깊이 탐구할 수 있는 기회를 제공합니다.
          <br />이 자격증은 당신의 백합 애호가로서의 정체성을 한층 더 빛내줄
          것입니다.
        </p>
      </div>
      <div>
        <Heading2>자격 시험 준비중</Heading2>
        <p>
          백합애호가자격시험은 준비중에 있습니다. 자격 시험 문제 출제원을 모집
          하는 중에 있습니다.
        </p>
      </div>
    </div>
  );
}
