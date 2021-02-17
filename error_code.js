exports.default = {
  UNDEFINED_ERROR: {
    code: 1,
    status: "UNDEFINED_ERROR",
    reason: "정의되지 않은 오류입니다.",
  },
  JWT_TOKEN_ERROR: {
    code: 2,
    status: "JWT_TOKEN_ERROR",
    reason: "기기에 저장된 로그인 정보가 만료되었습니다",
  },
  INVALID_PARAMETER: {
    code: 3,
    status: "INVALID_PARAMETER",
    reason: "전달된 파라미터 중 잘못된 항목이있습니다.",
  },
  ALREADY_VERIFY_ID: {
    code: 4,
    status: "ALREADY_VERIFY_ID",
    reason: "이미 인증된 아이디입니다.",
  },
  INVALID_VERIFY_CODE: {
    code: 5,
    status: "INVALID_VERIFY_CODE",
    reason: "인증 코드가 잘못되었습니다.",
  },
  EXPIRED_VERIFY_CODE: {
    code: 6,
    status: "EXPIRED_VERIFY_CODE",
    reason: "인증 코드가 만료되었습니다.",
  },
  INVALID_NICKNAME: {
    code: 7,
    status: "INVALID_NICKNAME",
    reason: "닉네임은 한글, 영문, 숫자 2~12글자여야 합니다.",
  },
  INVALID_NAME: {
    code: 8,
    status: "INVALID_NICKNAME",
    reason: "이름은 한글, 영문 2~12글자여야 합니다.",
  },
  ALREADY_USED_EMAIL: {
    code: 9,
    status: "ALREADY_USED_EMAIL",
    reason: "입력된 이메일이 이미 존재합니다.",
  },
  INVALID_ACCOUNT: {
    code: 10,
    status: "INVALID_ACCOUNT",
    reason: "아이디 혹은 패스워드가 틀렸습니다.",
  },
  UNVERIFIED_ACCOUNT: {
    code: 11,
    status: "UNVERIFIED_ACCOUNT",
    reason: "아직 인증 되지 않은 계정입니다.",
  },
  INVALID_TOKEN: {
    code: 12,
    status: "INVALID_TOKEN",
    reason: "토큰 검증에 실패했습니다.",
  },
  DATA_NOT_FOUND: {
    code: 13,
    status: "DATA_NOT_FOUND",
    reason: "데이터를 찾을 수 없습니다.",
  },
  ALREADY_USE_PHONENUMBER: {
    code: 14,
    status: "ALREADY_USED_PHONENUMBER",
    reason: "입력된 번호가 이미 존재합니다.",
  },
  ALREADY_USE_NICKNAME: {
    code: 15,
    status: "ALREADY_USED_NICKNAME",
    reason: "입력된 닉네임이 이미 존재합니다.",
  },
  NOT_EXISTS_MEMBER: {
    code: 16,
    status: "NOT_EXISTS_MEMBER",
    reason: "그룹안에 멤버가 존재하지 않습니다.",
  },
  PERMISSION_DENIED: {
    code: 17,
    status: "PERMISSION_DENIED",
    reason: "추가하거나 변경할 권한이 없습니다.",
  },
  UNREMOVABLE_GROUP: {
    code: 18,
    status: "UNREMOVABLE_GROUP",
    reason: "하위 그룹이 있어 이 그룹을 삭제할 수 없습니다.",
  },
  EXPIRED_LINK: {
    code: 19,
    status: "EXPIRED_LINK",
    reason: "초대 링크가 만료되었습니다.",
  },
  MISMATCH_PARENT_GROUP: {
    code: 20,
    status: "MISMATCH_PARENT_GROUP",
    reason: "상위 그룹이 다릅니다.",
  },
  INVALID_USER_DATA: {
    code: 21,
    status: "INVALID_USER_DATA",
    reason: "선택된 유저정보가 없습니다.",
  },
  UNREMOVABLE_PERMISSION: {
    code: 22,
    status: "UNREMOVABLE_PERMISSION",
    reason: "기본 권한은 삭제할 수 없습니다. (관리자, 준회원)",
  },
  HAS_ALREADY_USE_PERMISSION: {
    code: 23,
    status: "ALREADY_USE_PERMISSION",
    reason: "부여된 권한을 가진 아이디가 있습니다.",
  },
  INVALID_GROUP_TYPE: {
    code: 24,
    status: "INVALID_GROUP_TYPE",
    reason: "그룹타입이 다릅니다.",
  },
  USER_IS_NOT_ADMIN: {
    code: 25,
    status: "INVALID_GROUP_TYPE",
    reason: "관리자만 허용되는 기능입니다.",
  },
  UNEDITABLE_SURVEY: {
    code: 26,
    status: "UNEDITABLE_SURVEY",
    reason: "설문조사를 수정할 수 없습니다.",
  },
  OUT_OF_DATE_SURVEY: {
    code: 27,
    status: "OUT_OF_DATE_SURVEY",
    reason: "설문조사 기간이 아닙니다.",
  },
  OUT_OF_MAX_PARTICIPATE_COUNT_SURVEY: {
    code: 28,
    status: "OUT_OF_DATE_SURVEY",
    reason: "최대 참여 숫자를 넘었습니다.",
  },
  OUT_OF_MAX_PARTICIPATE_COUNT_SURVEY: {
    code: 28,
    status: "OUT_OF_DATE_SURVEY",
    reason: "최대 참여 숫자를 넘었습니다.",
  },
  ERROR_ON_KACPTA_SERVER: {
    code: 29,
    status: "ERROR_ON_KACPTA_SERVER",
    reason: "세무사회 서버에 있는 정보를 확인하지 못했습니다.",
  },
  INVALID_HP: {
    code: 30,
    status: "INVALID_HP",
    reason: "올바른 핸드폰 번호가 아닙니다.",
  },
  NOT_FOUND_BIZNUM: {
    code: 31,
    status: "NOT_FOUND_BIZNUM",
    reason: "등록된 세무사 번호로 조회된 사업자 번호가 존재하지 않습니다.",
  },
  UNREGISTER_HANGIL_FAX: {
    code: 32,
    status: "UNREGISTER_HANGIL_FAX",
    reason: "한길 팩스 서비스 미신청 고객입니다.",
  },
  ERROR_ON_HANGIL_FAX: {
    code: 33,
    status: "ERROR_ON_HANGIL_FAX",
    reason: "한길 팩스 데이터 로딩중 오류가 발생했습니다.",
  },
  EXPIRED_HANGIL_FAX_DATA: {
    code: 34,
    status: "EXPIRED_HANGIL_FAX_DATA",
    reason: "한길 팩스 데이터가 만료되었습니다. 다시 요청해주세요.",
  },
  MISMATCH_WITHDRAWAL_STRING: {
    code: 35,
    status: "MISMATCH_WITHDRAWAL_STRING",
    reason: "탈퇴를 위한 문구를 정확히 입력해주세요.",
  },
  WITHDRAWAL: {
    code: 36,
    status: "WITHDRAWAL",
    reason: "이미 탈퇴한 계정입니다.",
  },
  ERROR_ON_HANGIL_SERVER: {
    code: 37,
    status: "ERROR_ON_HANGIL_SERVER",
    reason: "한길TIS에서 정보를 확인하지 못했습니다.",
  },
  NOT_FOUND_HANGIL_ACCOUNT: {
    code: 38,
    status: "NOT_FOUND_HANGIL_ACCOUNT",
    reason: "사용 중인 한길 백업 서비스 ID가 존재하지 않습니다.",
  },
  UNREGISTER_HANGIL_BACKUP: {
    code: 39,
    status: "UNREGISTER_HANGIL_BACKUP",
    reason: "사용 중인 한길 백업 서비스 ID가 존재하지 않습니다.",
  },
  UNREGISTER_HANGIL_BESTBILL: {
    code: 40,
    status: "UNREGISTER_HANGIL_BESTBILL",
    reason: "사용 중인 한길 백업 서비스 ID가 존재하지 않습니다.",
  },
  NOT_FOUND_NICE: {
    code: 41,
    status: "UNREGISTER_HANGIL_BESTBILL",
    reason: "사용 중인 한길 백업 서비스 ID가 존재하지 않습니다.",
  },
  ALREADY_SIGNED: {
    code: 42,
    status: "ALREADY_SIGNED",
    reason: "이미 결재되었습니다.",
  },
  MISSMATCH_DRAFTER: {
    code: 43,
    status: "MISSMATCH_DRAFTER",
    reason: "기안자가 다릅니다.",
  },
  REQUIRE_GROUP_ADMIN: {
    code: 44,
    status: "REQUIRE_GROUP_ADMIN",
    reason: "관리자 멤버는 한명 이상 존재해야합니다. 그룹 삭제를 이용해주세요.",
  },
  HAS_GROUP: {
    code: 45,
    status: "HAS_GROUP",
    reason: "아직 가입된 그룹이 있습니다.",
  },
};
