# 네트워크 엔드포인트

> **중요**: CleanClip은 귀하의 개인정보를 매우 중요하게 생각합니다. 모든 클립보드 데이터는 사용자의 기기에만 저장됩니다. iCloud 동기화를 활성화하면 개인 iCloud 계정을 통해 데이터가 동기화됩니다. 클립보드 데이터를 다른 서버에 업로드하지 않습니다.

## 네트워크 엔드포인트

CleanClip은 다양한 기능을 위해 다음 도메인들에 연결됩니다:

### 분석 및 충돌 보고
- crashlyticsreports-pa.googleapis.com
- firebaselogging-pa.googleapis.com  
- firebase-settings.crashlytics.com
- app-measurement.com
- firebaseinstallations.googleapis.com

이 도메인들은 Google Firebase 서비스에 속하며 앱의 안정성과 성능 향상을 위해 충돌 보고서와 기본 사용 분석을 수집하는 데 사용됩니다.

### 라이선스 인증
- cleanclip.macaify.com

이 도메인은 CleanClip 멤버십 권한과 라이선스 상태를 확인하는 데 사용됩니다.

### 업데이트 및 배포
- github-api-proxy.cleanclip.cc
- objects.githubusercontent.com
- github.com
- github-production-user-asset-6210df.s3.amazonaws.com

이 도메인들은 애플리케이션 업데이트를 확인하고 다운로드하는 데 사용됩니다.

### 제휴 서비스
- api.cleanclip.cc

이 도메인은 다음을 포함한 제휴 프로그램 작업을 처리합니다:
- 제휴 링크 생성
- 제휴 정보 검색

참고: 제휴 정보 검색은 제휴 페이지에 접속할 때만 사용 가능합니다.

> **참고**: 애플리케이션이 발전함에 따라 이 문서에 나열된 네트워크 엔드포인트가 최신 상태가 아닐 수 있습니다. 여기에 명시되지 않은 네트워크 요청을 발견하시면 support@cleanclip.cc로 문의해 주시기 바랍니다.