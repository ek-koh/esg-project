<template>
  <CDropdown
    inNav
    class="c-header-nav-items"
    placement="bottom-end"
    add-menu-classes="pt-0"
  >
    <template #toggler>
      <CHeaderNavLink>
        <div class="c-avatar">
          <img
            src="img/avatars/6.jpg"
            class="c-avatar-img "
          />
        </div>
      </CHeaderNavLink>
    </template>
    <CDropdownHeader tag="div" class="text-center" color="light">
      <strong>신금투21기님, 환영합니다.</strong>
    </CDropdownHeader>
    <CDropdownItem>
      <CIcon name="cil-comment-square" /> 알림
      <CBadge color="warning" class="mfs-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownItem>
      <CIcon name="cil-user" /> 내 정보
    </CDropdownItem>
    <CDropdownItem>
      <CIcon name="cil-settings" /> 설정
    </CDropdownItem>
    <CDropdownDivider/>
    <CDropdownItem>
      <CIcon name="cil-lock-locked" /> 로그아웃
    </CDropdownItem>
  </CDropdown>
</template>

<script>
export default {
  name: 'TheHeaderDropdownAccnt',
  data () {
    return { 
      itemsCount: 42
    }
  }
}
</script>

<style scoped>
  .c-icon {
    margin-right: 0.3rem;
  }
</style>