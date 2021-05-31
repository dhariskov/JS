// click when locked, click when unlocked
document.body.innerHTML = `
<div id="container">
		<main id="main">
			<div class="profile">
				<img src="./iconProfile2.png" class="userIcon" />
				<label>Lock</label>
				<input type="radio" name="user1Locked" value="lock" checked>
				<label>Unlock</label>
				<input type="radio" name="user1Locked" value="unlock"><br>
				<hr>
				<label>Username</label>
				<input type="text" name="user1Username" value="User 1 Userov" disabled readonly />
				<div id="user1HiddenFields">
					<hr>
					<label>Email:</label>
					<input type="email" name="user1Email" value="user1-userov@users.bg" disabled readonly />
					<label>Age:</label>
					<input type="email" name="user1Age" value="18" disabled readonly />
				</div>
				<button>Show more</button>
			</div>

			<div class="profile">
				<img src="./iconProfile2.png" class="userIcon" />
				<label>Lock</label>
				<input type="radio" name="user2Locked" value="lock" checked>
				<label>Unlock</label>
				<input type="radio" name="user2Locked" value="unlock"><br>
				<hr>
				<label>Username</label>
				<input type="text" name="user2Username" value="User 2 Userov" disabled readonly />
				<div id="user2HiddenFields">
					<hr>
					<label>Email:</label>
					<input type="email" name="user2Email" value="user2-userov@users.bg" disabled readonly />
					<label>Age:</label>
					<input type="email" name="user2Age" value="25" disabled readonly />
				</div>
				<button>Show more</button>
			</div>

			<div class="profile">
				<img src="./iconProfile2.png" class="userIcon" />
				<label>Lock</label>
				<input type="radio" name="user3Locked" value="lock" checked>
				<label>Unlock</label>
				<input type="radio" name="user3Locked" value="unlock"><br>
				<hr>
				<label>Username</label>
				<input type="text" name="user3Username" value="User 3 Userov" disabled readonly />
				<div id="user3HiddenFields">
					<hr>
					<label>Email:</label>
					<input type="email" name="user3Email" value="user3-userov@users.bg" disabled readonly />
					<label>Age:</label>
					<input type="email" name="user3Age" value="23" disabled readonly />
				</div>
				<button>Show more</button>
			</div>
		</main>
	</div>
`;

result();

$("input[value='unlock'][name='user1Locked']").click();
$("button")[0].click();
$("button")[1].click();

let username = $("input[name='user1Username']")[0].value;
let email = $("input[name='user1Email']")[0].value;
let age = $("input[name='user1Age']")[0].value;

let locked = $("#user2HiddenFields")[0].style.length;

expect(username).to.equal("User 1 Userov");
expect(email).to.equal("user1-userov@users.bg");
expect(age).to.equal("18");
expect(locked).to.equal(0);