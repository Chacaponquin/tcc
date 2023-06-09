export const ROUTES = {
  LOGIN: "/login",
  ROOT: "/",
  ADD_CAPSULE: "/admin/add_capsule",
  CAPSULE_VIEW: (capsuleID: number) => `/view/${capsuleID}`,
  NOT_FOUND: "/404"
} as const;
