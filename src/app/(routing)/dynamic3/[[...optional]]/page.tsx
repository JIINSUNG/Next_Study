// [...이름] 을 설정하면 catchAll 세그먼트임, 어떠한 경로가 입력되든 자동으로 라우팅 됨
// dynamic2/a || dynamic2/a/b || dynamic2/a/b/c 등등
// 옵셔널 세그먼트는 세그먼트가 주어지지 않아도 에러가 안남
// dynmic2/도 캐치함 이때 catchAll은 빈배열로 나옴

import React from "react";

type paramsType = {
  params: {
    optional?: string[];
  };
};

export default function Page({ params }: paramsType) {
  return (
    <div>
      This is Optional Catch All Routing..
      {params.optional &&
        params.optional.map((segment, i) => (
          <p>
            {i} : {segment}
          </p>
        ))}
    </div>
  );
}
