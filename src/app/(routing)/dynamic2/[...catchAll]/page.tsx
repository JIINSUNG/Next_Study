// [...이름] 을 설정하면 catchAll 세그먼트임, 어떠한 경로가 입력되든 자동으로 라우팅 됨
// dynamic2/a || dynamic2/a/b || dynamic2/a/b/c 등등
// 단 세그먼트가 주어지지 않으면 에러가 남

import React from "react";

type paramsType = {
  params: {
    catchAll: string[];
  };
};

export default function Page({ params }: paramsType) {
  return (
    <div>
      This is Catch All Routing..
      {params.catchAll &&
        params.catchAll.map((segment, i) => (
          <p>
            {i} : {segment}
          </p>
        ))}
    </div>
  );
}
