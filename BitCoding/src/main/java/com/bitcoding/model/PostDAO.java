package com.bitcoding.model;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import com.bitcoding.database.ServerManager;

public class PostDAO {

	private SqlSessionFactory server = ServerManager.getSqlSessionFactory();

	// post_idx, post_title, post_content, post_file, create_at, email, nick, post_type, profile, category, post_tag
	// 1. 게시물 생성
	public int create(Post post) {
		SqlSession session = server.openSession(true);

		int cnt = session.insert("create", post);

		session.close();

		return cnt;
	}

	/*
	 * // 2. 회원탈퇴 public int delete(Member member) { SqlSession session =
	 * server.openSession(true);
	 * 
	 * int cnt = session.delete("delete", member);
	 * 
	 * session.close();
	 * 
	 * return cnt; }
	 * 
	 * // 3. 로그인 public Member login(Member member) { SqlSession session =
	 * server.openSession(true);
	 * 
	 * Member result = session.selectOne("login", member);
	 * 
	 * session.close();
	 * 
	 * return result; }
	 * 
	 * // 4. 회원정보수정 public int update(Member member) { SqlSession session =
	 * server.openSession(true);
	 * 
	 * int cnt = session.update("update", member);
	 * 
	 * session.close();
	 * 
	 * return cnt; }
	 * 
	 * // 5. 이메일 중복 체크 public Member check(String email) { SqlSession session =
	 * server.openSession(true);
	 * 
	 * Member result = session.selectOne("check", email);
	 * 
	 * session.close();
	 * 
	 * return result; }
	 * 
	 * // 6. 전체 정보 조회 public List<Member> search() { SqlSession session =
	 * server.openSession(true);
	 * 
	 * List<Member> result = session.selectList("search");
	 * 
	 * session.close();
	 * 
	 * return result; }
	 */
}