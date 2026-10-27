"use client";

import { useQuery } from "@tanstack/react-query";
import { getUsers } from "@/entities/user";

export function useUserList() {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
}
