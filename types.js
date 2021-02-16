return {
  messageGroupType: {
    NORMAL_GROUP: 0,
    PRIVATE_CHANNEL: 1,
    PUBLIC_CHANNEL: 2,
    PERSONAL_GROUP: 3,
    NOTE_GROUP: 4,
    CUSTOMER_GROUP: 5,
  },
  cmsGroupType: {
    FIRST: 0,
    PRIVATE: 1,
    NORMAL: 2,
  },
  cmsGroupMemberType: {
    NORMAL: 0,
    CUSTOMER: 1,
  },
  cmsGroupTeamType: {
    NORMAL: 0,
  },
  messageType: {
    SYSTEM: "system",
    IMAGE: "image",
    FILE: "file",
    TEXT: "text",
    MEDIA: "media",
  },
  pushType: {
    TOTAL: 1,
    PARTIAL: 2,
  },
  userType: {
    TAX_ACCOUNTANT: 101,
    TAX_ASSOCIATE: 104,
    NATIONAL_TAX_ACCOUNTANT: 105,
    TAX_OFFICE: 201,
    UNTYPED_USER: 300,
    NORMAL_USER: 301,
    ACCEPTANCE_USER: 302,
    PRE_CUSTOMER_USER: 304,
    CUSTOMER_USER: 305,
  },
  documentSignStatus: {
    CC: 0,
    REQUIRE_SIGN: 1,
    COMPLETE_SIGN: 2,
    REJECT_SIGN: 3,
    WAIT_SIGN: 4,
    REJECT_BEFORE_SIGN: 5,
  },
  documentType: {
    TEMP: 0,
    SIGN: 1,
    CONTRACT: 2,
  },
};
