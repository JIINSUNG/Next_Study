// dynamic/[id] id에 어떠한 값이 들어오더라도 동적으로 매핑됨
import React from "react";

export default function Page({ params }: { params: { id: number } }) {
  return <div>This is Dynamic Route, params : {params.id} </div>;
}
